"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function SonnerDemo() {
    return (
        <Button
            onClick={() =>
                toast("clicked", {
                    description: "the button was really clicked this time",
                    cancel: {
                        label: "undo",
                        onClick: () => console.log("undo")
                    },
                    duration: 5000000
                })
            }
        >           
            test button
        </Button>
    )
}