import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const comments = await prisma.guestbookEntry.findMany({
            orderBy: { createdAt: "desc" },
        });
        return Response.json(comments);
    } catch (error) {
        console.error("Error fetching comment:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch comments" }), { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { name, message } = await req.json();

        if (!name || !message) {
            return new Response(JSON.stringify({ error: "Name and message are required" }), { status: 400 });
        }

        const comment = await prisma.guestbookEntry.create({
            data: { name, message },
        });

        return new Response(JSON.stringify(comment), { status: 201 });
    } catch (error) {
        console.error("Error saving comment:", error);
        return new Response(JSON.stringify({ error: "Failed to save comment" }), { status: 500 });
    }
}
