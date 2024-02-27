using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ApiTesting_1.Models.Datavalue
{
    public static class DataValues
    {
        private static List<DataInterface> person = new List<DataInterface>()
        {
            new DataInterface{Id=1, Name="Naitik", Description="Developer", Age=21},
            new DataInterface{Id=2, Name="A", Description="developer", Age=22},
            new DataInterface{Id=3,Name="B", Description="Developer", Age=24},
            new DataInterface{Id=4,Name="Keval", Description="Senior", Age=50}
        };

        public static bool exist(int id)
        {
            return person.Any(x => x.Id == id);
        }

        public static List<DataInterface> Get()
        {
            return person;
        }

        public static DataInterface? getbyId(int id)
        {
            return person.FirstOrDefault(x => x.Id == id);
        }

        public static DataInterface? getbyprop(string name, string dis, int age)
        {
            return person.FirstOrDefault(x => x.Name == name && x.Description == dis && x.Age == age);
        }
        public static void Create(DataInterface obj)
        {
            int maxId = person.Max(x => x.Id);
            obj.Id = maxId + 1;
            person.Add(obj);

        }

        public static void Update(DataInterface obj)
        {
            var updatethis = person.First(x => x.Id == obj.Id);
            updatethis.Name = obj.Name;
            updatethis.Description = obj.Description;
            updatethis.Age = obj.Age;   
        }

        public static void delete(int id)
        {
            var thisd = getbyId(id);
            if (thisd != null)
            {
                person.Remove(thisd);   
            }
        }
    }

    public static class ForLogIn
    {
        private static List<logInData> users = new List<logInData>();

        public static List<logInData> getdata()
        {
            return users;
        }
        public static void savedata(logInData user)
        {
            users.Add(user);
        }

    }


    public static class ForPersonal
    {
        private static List<personalData> users = new List<personalData>();
        public static List<personalData> getdata()
        {
            return users;
        }
        public static void savedata(personalData user)
        {
            users.Add(user);
        }
    }

    public static class ForQualification
    {
        private static List<dynamic> users = new List<dynamic>();
        public static List<dynamic> getdata()
        {
            return users;
        }
        public static void save(dynamic user)
        {
            users.Add(user);
        }
    }

    public static class ForFinal   // save to database
    {
        public static List<dynamic> users = new List<dynamic>();
        public static List<dynamic> getdata()
        {
            return users;
        }


        public static void savedata(Root user)
        {
            users.Add(user);

            //Console.WriteLine(user.personal.roles);
            //Console.WriteLine(data.personal.portfolio);
            //Console.WriteLine(user.GetProperty("personal").GetProperty("roles"));

            Queries.personaltable(user);
            Queries.Educationtable(user);
            Queries.qualificationtable(user);

            //return query;
        }

        //public static string getquery(dynamic data)
        //{
        //    return $"INSERT INTO zeus_user_registration.personalinformation \r\n(FirstName, LastName, Email, PhoneNo, Portfolio, Notification, Refferal, Password)\r\nVALUES\r\n({data.personal.fname}, {data.personal.lname}, {data.personal.email}, {data.personal.phone}, {data.personal.portfolio}, {data.personal.notification}, {data.personal.reffered}, {data.personal.password});";
        //}
    }



    public static class ForCheck
    {
        private static List<logInData> users = new List<logInData>();

        public static List<logInData> getdata()
        {
            return users;
        }
        public static void savedata(logInData user)
        {
            users.Add(user);
            Queries.JobApplyUser(user);
        }

    }

    public static class JobApply
    {
        private static List<dynamic> users = new List<dynamic>();
        public static List<dynamic> getdata()
        {
            return users;
        }
        public static void savedata(JobApplyData user)
        {
            users.Add(user);
            Queries.forAllApplicationTable(user);
        }
    }


}
