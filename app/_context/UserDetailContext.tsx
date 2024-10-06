import { createContext } from "react";
import { IUserDetailContext } from "../interfaces/app.interface";

export const UserDetailContext = createContext<IUserDetailContext | null>(null);
