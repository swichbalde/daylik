import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import DayNote from "@/components/ui/note/day-note";

export default function JournalTable() {
    function getDaysInMonth(year: number, month: number): number {
        return new Date(year, month + 1, 0).getDate();
    }

    function buildHabit() {
        return (
            <div className="flex flex-row items-center justify-center space-x-4">
                <div className="flex flex-col items-center">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Book
                    </label>
                    <Checkbox id="terms1" />
                </div>
                <div className="flex flex-col items-center">
                    <label
                        htmlFor="terms2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Book
                    </label>
                    <Checkbox id="terms2" />
                </div>
                <div className="flex flex-col items-center">
                    <label
                        htmlFor="terms3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Book
                    </label>
                    <Checkbox id="terms3" />
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen ">
            <h1>Current date: {new Date().toDateString()}</h1>
            <div className="max-w-full mx-auto py-4">
                <Table className={cn("w-full bg-white border border-gray-200")}>
                    <TableHeader>
                        <TableRow>
                            <TableCell className={cn("py-2 px-4 border-b w-1/12")}>Day#</TableCell>
                            <TableCell className={cn("py-2 px-4 border-b w-8/12")}>Daily Achievement</TableCell>
                            <TableCell className={cn("py-2 px-4 border-b w-3/12")}>Habits</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: getDaysInMonth(2024, 12 - 1) }, (_, index) => (
                            <TableRow key={index} className="hover:bg-gray-50">
                                <TableCell className="py-2 px-4 border-b">{index + 1}</TableCell>
                                <TableCell className="py-2 px-4 border-b">
                                    <div className="flex flex-row items-center justify-center space-x-4">
                                        <Input /> <DayNote />
                                    </div>
                                </TableCell>
                                <TableCell className="py-2 px-4 border-b">{buildHabit()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
