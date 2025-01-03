'use client'

import {Button} from "@/components/ui/button"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {toast} from "@/hooks/use-toast"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {PencilSquareIcon} from "@heroicons/react/24/outline";
import MarkdownInput from "@/components/ui/note/MarkdownInput";

export default function DayNote() {
    const FormSchema = z.object({
        bio: z.string(),
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <PencilSquareIcon/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Daily Notes/Goals</SheetTitle>
                    <SheetDescription>
                        This page is designed to help you seamlessly document your daily notes and set clear goals.
                    </SheetDescription>
                </SheetHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <MarkdownInput/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Save</Button>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    )
}