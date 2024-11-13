export interface AuthModel {
  data: any;
  refreshToken?: string;
}

export interface UserAddressModel {
  addressLine: string;
  city: string;
  state: string;
  postCode: string;
}

export interface UserCommunicationModel {
  email: boolean;
  sms: boolean;
  phone: boolean;
}

export interface UserSocialNetworksModel {
  linkedIn: string;
  facebook: string;
  twitter: string;
  instagram: string;
}

interface Role {
  id: number;
  name: string;
}

export interface UserModel {
  id: any;
  billing_status: boolean;
  wallet: any;
  username: string;
  password: string | undefined;
  email: string;
  mobile: number;
  display_name: string;
  name: string;
  first_name: string;
  last_name: string;
  fullname?: string;
  occupation?: string;
  companyName?: string;
  store_count?: string;
  phone?: string;
  roles?: Role[];
  pic?: string;
  roleId: number;
  language?: "en" | "de" | "es" | "fr" | "ja" | "zh" | "ru";
  timeZone?: string;
  website?: "https://orderflo.com";
  auth?: AuthModel;
  communication?: UserCommunicationModel;
  address?: UserAddressModel;
  socialNetworks?: UserSocialNetworksModel;
  permissions: Array<any>;
}
