'use client'

import {useState} from "react";
import {marked} from 'marked';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import DOMPurify from 'dompurify';

export default function MarkdownInput() {

    const [markdown, setMarkdown] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(event.target.value);
    };

    return <Tabs defaultValue="plaintext" className="w-[400px] py-1">
        <TabsList>
            <TabsTrigger value="plaintext">Plain Text</TabsTrigger>
            <TabsTrigger value="markdown">Markdown</TabsTrigger>
        </TabsList>
        <div className="w-full">
            <TabsContent value="plaintext">
            <textarea
                className="w-10/12 p-2 border border-gray-300 rounded"
                value={markdown}
                onChange={handleChange}
                placeholder="Write your notes here..."
            />
            </TabsContent>
            <TabsContent value="markdown">
                {markdown &&  <div
                    className="markdown-body w-10/12 p-2 border border-gray-300 rounded overflow-auto"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(markdown).toString()) }}
                />}
            </TabsContent>
        </div>
    </Tabs>
}