namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddTeacherLastName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teachers", "LastName", c => c.String(nullable: false, maxLength: 50));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Teachers", "LastName");
        }
    }
}
