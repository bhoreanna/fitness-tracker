import { RoleMaster } from './role-master';

export class UserMaster {

    public  userUid:number;
	
	public  userId:string ;
	public  userName:string ;
	public  createdBy:string   ;
	public  modifiedBy:string   ;
	public  createdDate:Date ;
	public  modifyDate :Date ;
	public  userStatus:string  ; 
	public  password:string   ;
	
	public  email :String    ; 
	
	
	public roleMaster: RoleMaster ;
}
