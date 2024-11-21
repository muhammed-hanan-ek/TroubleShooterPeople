import CommonApi from "./CommonApi";
import serverUrl from "./ServerUrl";

// register
export const registerApi=async(reqBody)=>{
    return await CommonApi("POST",`${serverUrl}/register`,reqBody)
}

// login
export const loginApi=async(reqBody)=>{
    return await CommonApi("POST",`${serverUrl}/login`,reqBody)
}

// add-grievance
export const addGrievanceApi=async(reqBody,reqHeaer)=>{
    return await CommonApi("POST",`${serverUrl}/add-grievance`,reqBody,reqHeaer)
}

// all Grievances called by complaint cards
export const getAllGrievanceApi=async(reqHeaer)=>{
    return await CommonApi("GET",`${serverUrl}/all-grievance`,'',reqHeaer)
}

// resolved grievances called by usercomplaints
export const getResolvedHistory=async(reqHeaer)=>{
    return await CommonApi("GET",`${serverUrl}/resolved-grievance`,'',reqHeaer)
}

// delete grievance called by complaint card
export const deleteGrievanceApi=async(gid,reqHeaer)=>{
    return await CommonApi("DELETE",`${serverUrl}/${gid}/remove-grievance`,{},reqHeaer)
}

// view reply called by complaint card
export const viewReplyApi=async(gid,reqHeaer)=>{
    return await CommonApi("GET",`${serverUrl}/${gid}/view-reply`,{},reqHeaer)
}
