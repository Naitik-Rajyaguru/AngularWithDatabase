using ApiTesting_1.Models;

namespace ApiTesting_1
{
    public class Queries
    {
        public static void personaltable(Root user)
        {
            int refered = (user.personal.Rname.Length > 0) ? 1 : 0;
            int notifi = user.personal.sub ? 1 : 0;
            //Console.WriteLine(user.personal.roles[0]);
            
            string queryforpersonalinfo = $"INSERT INTO zeus_user_registration.personalinformation (FirstName, LastName, Email, PhoneNo, Portfolio, Notification, Refferal, Password) VALUES ('{user.personal.fName}', '{user.personal.lName}', '{user.personal.Email}', '{user.personal.phone}', '{user.personal.portfolio}', '{notifi}', '{refered}', '{user.login.password}')";
            DataBase.Main(queryforpersonalinfo, "zeus_user_registration");

            foreach (var role in user.personal.roles)
            {
                Console.WriteLine(role);
                string queryforroles = $" INSERT INTO zeus_user_registration.personalinformation_has_jobroles(personalInformation_UserId, JobRoles_JobId) " +
                    $"SELECT UserId as personalInformation_UserId, JobId as JobRoles_JobId FROM personalinformation JOIN jobroles WHERE personalinformation.Email=\"{user.personal.Email}\" " +
                    $"AND jobroles.JobRoll = \"{role}\";";
                //Console.WriteLine(queryforroles);
                DataBase.Main(queryforroles, "zeus_user_registration");
            }
        }

        public static void Educationtable(Root user)
        {
            
            string queryforqualification = $"insert into zeus_user_registration.educational (Persentage, Yearpassing, UserId, City, Qualification_QualificationId,Stream_StreamId, College_CollegeId, College) " +
                $"select \"{user.qualification.edu.persentage}\", \"{user.qualification.edu.passingy}\", UserId, \"{user.qualification.edu.collagecity}\", QualificationId , StreamId , CollegeId , \"{user.qualification.edu.ocollage}\" " +
                $"from personalinformation " +
                $"join qualification " +
                $"join stream " +
                $"join college " +
                $"where personalinformation.Email=\"{user.personal.Email}\" " +
                $"and qualification.qualification=\"{user.qualification.edu.qualificaiton}\" " +
                $"and stream.Qualification_Stream=\"{user.qualification.edu.stream}\" " +
                $"and college.CollegeName=\"{user.qualification.edu.collage}\";";
            Console.WriteLine(queryforqualification);
            DataBase.Main(queryforqualification, "zeus_user_registration");

        }

        public static void qualificationtable(Root user)
        {
            Console.WriteLine("*****************");
            int prvap = (user.qualification.prof.prevapply == "yes") ? 1 : 0;

            string query = $"INSERT INTO zeus_user_registration.professionaldetails (UserId, PreviousApply) " +
                $"select UserId as uid, \"{prvap}\" as prav " +
                $"from personalinformation " +
                $"where personalinformation.Email=\"{user.personal.Email}\"; ";
            DataBase.Main(query, "zeus_user_registration");

            foreach(var techs in user.qualification.prof.techfamil)
            {
                string qfortechs = $"insert into zeus_user_registration.professionaldetails_has_technologies(ProfessionalDetails_ProfessionalDetailId,Technologies_TechnologyId) " +
                    $"select ProfessionalDetailId, TechnologyId " +
                    $"from professionaldetails " +
                    $"join technologies " +
                    $"where UserId = (select UserId from personalinformation where personalinformation.Email=\"{user.personal.Email}\") " +
                    $"and technologies.TechnologyName = \"{techs}\";";
                DataBase.Main(qfortechs, "zeus_user_registration");
            }

            if(user.qualification.prof.fresher == "experianced")
            {
                int onnotic = (user.qualification.prof.onNotic == "yes") ? 1 : 0;
                //DateTime dateParsed = DateTime.Parse(user.qualification.prof.noticdate);
                string mysqlDateFormat = DateTime.TryParse(user.qualification.prof.noticdate, out DateTime dateParsed)
                ? dateParsed.ToString("yyyy-MM-dd")
                : "Invalid date format";

                string query2 = $"insert into zeus_user_registration.experienced(ExperienceYear, CurrentCTC, ExpectedCTC, NoticePeriod, ProfessoinalId, StartDate, Duration) " +
                    $"select \"{user.qualification.prof.expY}\", \"{user.qualification.prof.currentCTC}\", \"{user.qualification.prof.expectedCTC}\", \"{onnotic}\", ProfessionalDetailId, \"{mysqlDateFormat}\", \"{user.qualification.prof.durationNotic}\" " +
                    $"from professionaldetails " +
                    $"where  UserId = (select UserId from personalinformation where personalinformation.Email=\"{user.personal.Email}\");"; 
                DataBase.Main(query2, "zeus_user_registration");

                foreach (var techs in user.qualification.prof.techexpert)
                {
                    string qfortechs = $"insert into zeus_user_registration.experienced_has_technologies(Professional_ID,Technologies_TechnologyId) " +
                        $"select ProfessionalDetailId, TechnologyId " +
                        $"from professionaldetails " +
                        $"join technologies " +
                        $"where UserId = (select UserId from personalinformation where personalinformation.Email=\"{user.personal.Email}\") " +
                        $"and technologies.TechnologyName = \"{techs}\";";
                    DataBase.Main(qfortechs, "zeus_user_registration");
                }

            }
        }


        public static void JobApplyUser(logInData user)
        {
            // check for conditions

            string queryforuser = $"insert into walkinportal.user (UserEmail, UserPassword) " +
                $"values(\"{user.Email}\", \"{user.Password}\");";
            DataBase.Main(queryforuser, "walkinportal");    
        }

        public static void forAllApplicationTable(JobApplyData dt)
        {
            string q1 = $"insert into walkinportal.userappliedtowalkin (User_UserId, WalkInId) " +
                $"select user.UserId, walkinoverview.WalkInId " +
                $"from user " +
                $"join walkinoverview " +
                $"where user.UserEmail=\"{dt.login.Email}\" " +
                $"and " +
                $"walkinoverview.WalkInHeading=\"{dt.applicationData.title}\";";
            Console.WriteLine(q1);
            DataBase.Main(q1, "walkinportal");

            foreach(var roles in dt.applicationData.preferedroles)
            {
                string q2 = $"insert into walkinportal.userappliedroleinwalkin (User_UserId, WalkinJobRoleId) " +
                $"select user.UserId, walkinoverview_has_jobroles.WalkInJobId " +
                $"from user " +
                $"join walkinoverview_has_jobroles " +
                $"where user.UserEmail=\"{dt.login.Email}\" " +
                $"and " +
                $"(walkinoverview_has_jobroles.WalkInOverview_WalkInId=(select WalkInId from walkinoverview where WalkInheading=\"{dt.applicationData.title}\") " +
                $"and walkinoverview_has_jobroles.JobRoles_JobRolesId = (select JobRolesId from jobroles where JobRoles = \"{roles}\"));";
                Console.WriteLine(q2);
                DataBase.Main(q2, "walkinportal");

            }

            string q3 = $"insert into walkinportal.userselectedtimeofwalkin (UserId, WalkinTimeId) " +
                $"select user.UserId, walkinoverview_has_timeforwalkin.WalkingTimeId " +
                $"from user " +
                $"join walkinoverview_has_timeforwalkin " +
                $"where user.UserEmail=\"{dt.login.Email}\" " +
                $"and " +
                $"(walkinoverview_has_timeforwalkin.WalkInOverview_WalkInId=(select WalkInId from walkinoverview where WalkInheading=\"{dt.applicationData.title}\") " +
                $"and walkinoverview_has_timeforwalkin.TimeForWalkIn_TimeID = (select TimeID from times where Time = \"{dt.applicationData.time}\"));";
            DataBase.Main(q3, "walkinportal");
            

        }
        

    }
}
