const baseApiUrl = 'https://cbuilder.cboard.io/api';

// Handler for POST requests to create a new codes
export async function POST(req, res) {
    const data = await req.json();
    const source = data.source;
    const email = data.email;

    // Create a new code
    try {
        const res = await fetch(baseApiUrl + '/passcode/', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + process.env.INTERNAL_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ source: source }),
        });
        if (res.status === 200) {

            // Retrieve the code for the email
            const res = await fetch(baseApiUrl + '/passcode/email/', {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + process.env.INTERNAL_API_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email }),
            });
            if (res.status === 200) {

                // Send the code to the email
                const data = await res.json();
                return new Response(JSON.stringify({ code: data.code, email: email }),
                    {
                        headers: { "content-type": "application/json" },
                        status: 200,
                    }
                );
            } else {
                console.error('Error retrieving code for email');
                return new Response(JSON.stringify({ message: "error" }),
                    {
                        headers: { "content-type": "application/json" },
                        status: res.status,
                    }
                );
            }
        } else {
            console.error('Error creating code');
            return new Response(JSON.stringify({ message: "error" }),
                {
                    headers: { "content-type": "application/json" },
                    status: res.status,
                }
            );
        }
    } catch (error) {
        console.error('Error creating code. ' + error.message);
        return new Response(JSON.stringify({ message: error.message }),
            {
                headers: { "content-type": "application/json" },
                status: 500,
            }
        );
    }
}