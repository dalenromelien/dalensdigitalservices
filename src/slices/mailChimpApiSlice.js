import {apiSlice} from "./apiSlice";
import {MAIL_CHIMP_API} from "../constants";
const LIST_ID = process.env.REACT_APP_LIST_ID;

export const mailChimpApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        subscribe: builder.mutation({
            query: (formData) => ({
                url:`${MAIL_CHIMP_API}/subscribe`,
                method: "POST",
                body: {
                    list_id: LIST_ID,
                    ...formData
                },
            }),
        }),
    }),
});

export const {useSubscribeMutation} = mailChimpApiSlice;