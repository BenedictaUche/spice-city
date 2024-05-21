import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../axiosInstance";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";



export const useAddFreeCourses = () => {
    const { toast } = useToast();

    const mutationFn = async (data: any) => {
        const response = await axiosInstance.post("/courses/addFreeCourse", data);
        return response.data;
    };

    return useMutation(mutationFn, {
        onSuccess: (response: any) => {
            if(response.status === 200 || response.status === 201){
                toast({
                    title: "Course added successfully",
                    description: `${response.message}`,
                    className: "toast-success",
                });
            } else {
                toast({
                  title: "Something went wrong... Try Again",
                  description: `${response.error}`,
                  className: "toast-error",
                });
              }
        }
    });
}


export const useUpdateFreeCourses = (accountId: any) => {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const mutationFn = async (data: any) => {
        const response = await axiosInstance.put(`/courses/updateFreeCourse/${accountId}`, data);
        return response.data;
    };

    return useMutation(mutationFn, {
        onSuccess: (response: any) => {
            queryClient.invalidateQueries(["freeCourses", accountId]);
            if(response.status === 200 || response.status === 201){
                toast({
                    title: "Course updated successfully",
                    description: `${response.message}`,
                    className: "toast-success",
                });
            } else {
                toast({
                  title: "Something went wrong... Try Again",
                  description: `${response.error}`,
                  className: "toast-error",
                });
              }
        }
    });

}

export const useAddShopperCourse = () => {
    const { toast } = useToast();

    const mutationFn = async (data: any) => {
        const response = await axiosInstance.post("/courses/addShopperCourse", data);
        return response.data;
    };

    return useMutation(mutationFn, {
        onSuccess: (response: any) => {
            if(response.status === 200 || response.status === 201){
                toast({
                    title: "Course added successfully",
                    description: `${response.message}`,
                    className: "toast-success",
                });
            } else {
                toast({
                  title: "Something went wrong... Try Again",
                  description: `${response.error}`,
                  className: "toast-error",
                });
              }
        }
    });
}
