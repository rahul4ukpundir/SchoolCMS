export class Class{
    ClassId: number;
    ClassName:string;
    IsActive:boolean;
}

export class Section{
    SectionId:number
    ClassId: number;
    ClassName:string;
    IsActive:boolean;
}

export class Student {
    RollNo?: number;
    ClassId: number;
    SectionId:number;
    StudentName:string;
    FatherName:string;
    MotherName:string;
    Dob:string;
    Gender:string;
    Photo:string;
    PhoneNo:string;
    Addrss:string;
    IsActive:boolean;
}
