namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Addpass : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Children", "Password", c => c.String(nullable: false, maxLength: 10));
            DropColumn("dbo.Children", "Passsword");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Children", "Passsword", c => c.String(nullable: false, maxLength: 10));
            DropColumn("dbo.Children", "Password");
        }
    }
}
