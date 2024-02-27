namespace ApiTesting_1.Models
{
    public class DataInterface
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int Age { get; set; }
        //public string? gender { get; set; }  
    }

    public class logInData
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
        public bool Remember { get; set; }
    }

    public class personalData
    {


        public string? fName { get; set; }
        public string? lName { get; set; }
        public string? Email { get; set; }
        public string? phone { get; set; }
        public string? portfolio { get; set; }
        public List<string>? roles { get; set; }
        public string? Rname { get; set; }
        public bool sub { get; set; }


    }

    public class qualificationData
    {
        // no need since I have useed dynamic type LOL ;), Your future is in dark.
    }


    public class Login
    {
        public string email { get; set; }
        public string password { get; set; }
        public bool remember { get; set; }
    }

    public class Personal
    {
        public string fName { get; set; }
        public string lName { get; set; }
        public string Email { get; set; }
        public string phone { get; set; }
        public string portfolio { get; set; }
        public List<object> roles { get; set; }
        public string Rname { get; set; }
        public bool sub { get; set; }
    }

    public class Edu
    {
        public string persentage { get; set; }
        public string passingy { get; set; }
        public string qualificaiton { get; set; }
        public string stream { get; set; }
        public string collage { get; set; }
        public string ocollage { get; set; }
        public string collagecity { get; set; }
    }

    public class Prof
    {
        public string fresher { get; set; }
        public string expY { get; set; }
        public string currentCTC { get; set; }
        public string expectedCTC { get; set; }
        public List<object> techexpert { get; set; }
        public string othertechexpert { get; set; }
        public List<object> techfamil { get; set; }
        public string othertechfamil { get; set; }
        public string onNotic { get; set; }
        public string noticdate { get; set; }
        public string durationNotic { get; set; }
        public string prevapply { get; set; }
        public string whichRole { get; set; }
    }

    public class Qualification
    {
        public Edu edu { get; set; }
        public Prof prof { get; set; }
    }

    public class Root
    {
        public Login login { get; set; }
        public Personal personal { get; set; }
        public Qualification qualification { get; set; }
    }

    public class applicationData
    {
        public string title { get; set; }
        public string time { get; set; }
        public List<object> preferedroles { get; set; }
    }

    public class JobApplyData
    {
        public logInData login { get; set; }    
        public applicationData applicationData { get; set; }

    }



}
