import bcrypt from 'bcrypt'

export const hashPassword = async (password)=>{
     const dbpassword = await bcrypt.hash(password,12);
     return dbpassword;
}

export const comparePassword = async(userPassword,dbpassword)=>{
     const plainPassword = await bcrypt.compare(userPassword,dbpassword,)
     return plainPassword
}