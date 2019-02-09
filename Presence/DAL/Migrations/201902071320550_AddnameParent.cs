namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddnameParent : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Parents", "NameMother", c => c.String(nullable: false, maxLength: 50));
            AddColumn("dbo.Parents", "NameFather", c => c.String(nullable: false, maxLength: 50));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Parents", "NameFather");
            DropColumn("dbo.Parents", "NameMother");
        }
    }
}
