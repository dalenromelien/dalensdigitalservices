import {apiSlice} from "./apiSlice";
import {MAIL_CHIMP_API, LIST_ID} from "../constants";

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