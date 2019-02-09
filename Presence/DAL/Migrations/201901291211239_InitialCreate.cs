namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Alerts",
                c => new
                    {
                        AlertId = c.Int(nullable: false, identity: true),
                        Description = c.String(nullable: false, maxLength: 100),
                        DateTime = c.DateTime(nullable: false),
                        Level = c.Int(nullable: false),
                        Status = c.Boolean(nullable: false),
                        KindergartenChildId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.AlertId)
                .ForeignKey("dbo.KindergartenChilds", t => t.KindergartenChildId)
                .Index(t => t.KindergartenChildId);
            
            CreateTable(
                "dbo.KindergartenChilds",
                c => new
                    {
                        KindergartenChildId = c.Int(nullable: false, identity: true),
                        ChildId = c.Int(nullable: false),
                        KindergartenId = c.Int(nullable: false),
                        Year = c.DateTime(nullable: false),
                        TimeComeFrom = c.DateTime(nullable: false),
                        TimeComeTill = c.DateTime(nullable: false),
                        WhoComeTake = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.KindergartenChildId)
                .ForeignKey("dbo.Children", t => t.ChildId)
                .ForeignKey("dbo.Kindergartens", t => t.KindergartenId)
                .Index(t => t.ChildId)
                .Index(t => t.KindergartenId);
            
            CreateTable(
                "dbo.Children",
                c => new
                    {
                        ChildId = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false, maxLength: 50),
                        LastName = c.String(nullable: false, maxLength: 50),
                        Password = c.String(nullable: false, maxLength: 10),
                        Address = c.String(nullable: false, maxLength: 50),
                        AreaId = c.Int(nullable: false),
                        Age = c.Single(nullable: false),
                        Tz = c.String(nullable: false, maxLength: 9),
                        Image = c.String(),
                        ParentId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ChildId)
                .ForeignKey("dbo.Areas", t => t.AreaId)
                .ForeignKey("dbo.Parents", t => t.ParentId)
                .Index(t => t.AreaId)
                .Index(t => t.ParentId);
            
            CreateTable(
                "dbo.Areas",
                c => new
                    {
                        AreaId = c.Int(nullable: false, identity: true),
                        AreaName = c.String(nullable: false),
                        CityId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.AreaId)
                .ForeignKey("dbo.Cities", t => t.CityId)
                .Index(t => t.CityId);
            
            CreateTable(
                "dbo.Cities",
                c => new
                    {
                        CityId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.CityId);
            
            CreateTable(
                "dbo.Parents",
                c => new
                    {
                        ParentId = c.Int(nullable: false, identity: true),
                        PhoneMother = c.String(nullable: false, maxLength: 50),
                        PhoneFather = c.String(nullable: false, maxLength: 50),
                        Tell = c.String(nullable: false, maxLength: 10),
                        AnotherTell = c.String(maxLength: 10),
                        Email1 = c.String(),
                        Email2 = c.String(),
                    })
                .PrimaryKey(t => t.ParentId);
            
            CreateTable(
                "dbo.Kindergartens",
                c => new
                    {
                        KindergartenId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        Tell = c.String(nullable: false, maxLength: 10),
                        Code = c.String(nullable: false, maxLength: 20),
                        AreaId = c.Int(nullable: false),
                        Address = c.String(nullable: false, maxLength: 50),
                        BelongingId = c.Int(nullable: false),
                        FromAge = c.Int(nullable: false),
                        TillAge = c.Int(nullable: false),
                        LayerId = c.Int(nullable: false),
                        KindId = c.Int(nullable: false),
                        LanguageId = c.Int(nullable: false),
                        FromHour = c.Time(nullable: false, precision: 7),
                        TillHour = c.Time(nullable: false, precision: 7),
                    })
                .PrimaryKey(t => t.KindergartenId)
                .ForeignKey("dbo.Areas", t => t.AreaId)
                .ForeignKey("dbo.Belongings", t => t.BelongingId)
                .ForeignKey("dbo.Kinds", t => t.KindId)
                .ForeignKey("dbo.Languages", t => t.LanguageId)
                .ForeignKey("dbo.Layers", t => t.LayerId)
                .Index(t => t.AreaId)
                .Index(t => t.BelongingId)
                .Index(t => t.LayerId)
                .Index(t => t.KindId)
                .Index(t => t.LanguageId);
            
            CreateTable(
                "dbo.Belongings",
                c => new
                    {
                        BelongingId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.BelongingId);
            
            CreateTable(
                "dbo.Kinds",
                c => new
                    {
                        KindId = c.Int(nullable: false, identity: true),
                        KindName = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.KindId);
            
            CreateTable(
                "dbo.Languages",
                c => new
                    {
                        LanguageId = c.Int(nullable: false, identity: true),
                        LanguageName = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.LanguageId);
            
            CreateTable(
                "dbo.Layers",
                c => new
                    {
                        LayerId = c.Int(nullable: false, identity: true),
                        LayerName = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.LayerId);
            
            CreateTable(
                "dbo.Teachers",
                c => new
                    {
                        TeacherId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        Phone = c.String(nullable: false, maxLength: 10),
                        Tell = c.String(nullable: false, maxLength: 10),
                        KindergartenId = c.Int(nullable: false),
                        Email = c.String(),
                        Age = c.Int(nullable: false),
                        AreaId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TeacherId)
                .ForeignKey("dbo.Areas", t => t.AreaId)
                .ForeignKey("dbo.Kindergartens", t => t.KindergartenId)
                .Index(t => t.KindergartenId)
                .Index(t => t.AreaId);
            
            CreateTable(
                "dbo.PresenceChilds",
                c => new
                    {
                        PresenceChildId = c.Int(nullable: false, identity: true),
                        KindergartenChildId = c.Int(nullable: false),
                        DateTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.PresenceChildId)
                .ForeignKey("dbo.KindergartenChilds", t => t.KindergartenChildId)
                .Index(t => t.KindergartenChildId);
            
            CreateTable(
                "dbo.Responses",
                c => new
                    {
                        ResponseId = c.Int(nullable: false, identity: true),
                        KindergartenChildId = c.Int(nullable: false),
                        Header = c.String(nullable: false, maxLength: 50),
                        Description = c.String(nullable: false, maxLength: 200),
                        DateTime = c.DateTime(nullable: false),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ResponseId)
                .ForeignKey("dbo.KindergartenChilds", t => t.KindergartenChildId)
                .Index(t => t.KindergartenChildId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Responses", "KindergartenChildId", "dbo.KindergartenChilds");
            DropForeignKey("dbo.PresenceChilds", "KindergartenChildId", "dbo.KindergartenChilds");
            DropForeignKey("dbo.Teachers", "KindergartenId", "dbo.Kindergartens");
            DropForeignKey("dbo.Teachers", "AreaId", "dbo.Areas");
            DropForeignKey("dbo.Kindergartens", "LayerId", "dbo.Layers");
            DropForeignKey("dbo.Kindergartens", "LanguageId", "dbo.Languages");
            DropForeignKey("dbo.KindergartenChilds", "KindergartenId", "dbo.Kindergartens");
            DropForeignKey("dbo.Kindergartens", "KindId", "dbo.Kinds");
            DropForeignKey("dbo.Kindergartens", "BelongingId", "dbo.Belongings");
            DropForeignKey("dbo.Kindergartens", "AreaId", "dbo.Areas");
            DropForeignKey("dbo.Children", "ParentId", "dbo.Parents");
            DropForeignKey("dbo.KindergartenChilds", "ChildId", "dbo.Children");
            DropForeignKey("dbo.Areas", "CityId", "dbo.Cities");
            DropForeignKey("dbo.Children", "AreaId", "dbo.Areas");
            DropForeignKey("dbo.Alerts", "KindergartenChildId", "dbo.KindergartenChilds");
            DropIndex("dbo.Responses", new[] { "KindergartenChildId" });
            DropIndex("dbo.PresenceChilds", new[] { "KindergartenChildId" });
            DropIndex("dbo.Teachers", new[] { "AreaId" });
            DropIndex("dbo.Teachers", new[] { "KindergartenId" });
            DropIndex("dbo.Kindergartens", new[] { "LanguageId" });
            DropIndex("dbo.Kindergartens", new[] { "KindId" });
            DropIndex("dbo.Kindergartens", new[] { "LayerId" });
            DropIndex("dbo.Kindergartens", new[] { "BelongingId" });
            DropIndex("dbo.Kindergartens", new[] { "AreaId" });
            DropIndex("dbo.Areas", new[] { "CityId" });
            DropIndex("dbo.Children", new[] { "ParentId" });
            DropIndex("dbo.Children", new[] { "AreaId" });
            DropIndex("dbo.KindergartenChilds", new[] { "KindergartenId" });
            DropIndex("dbo.KindergartenChilds", new[] { "ChildId" });
            DropIndex("dbo.Alerts", new[] { "KindergartenChildId" });
            DropTable("dbo.Responses");
            DropTable("dbo.PresenceChilds");
            DropTable("dbo.Teachers");
            DropTable("dbo.Layers");
            DropTable("dbo.Languages");
            DropTable("dbo.Kinds");
            DropTable("dbo.Belongings");
            DropTable("dbo.Kindergartens");
            DropTable("dbo.Parents");
            DropTable("dbo.Cities");
            DropTable("dbo.Areas");
            DropTable("dbo.Children");
            DropTable("dbo.KindergartenChilds");
            DropTable("dbo.Alerts");
        }
    }
}
