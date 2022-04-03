import { database } from "../firebase";

export function CheckIfUserIsGuest(email: string) {
    return email.endsWith("@stud.acs.upb.ro") ? true : false;
}

