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
    rollNo?: number;
    classId: number;
    sectionId:number;
    studentName:string;
    fatherName:string;
    motherName:string;
    dob:any;
    gender:boolean;
    photo:string;
    email:string
    phoneNo:string;
    address:string;
    isActive:boolean;
    file?:any
}
