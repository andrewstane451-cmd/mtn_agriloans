export async function POST(request) {
  try {
    const { to, message } = await request.json();

    const body = new URLSearchParams({
      username: 'Maxwell_crypto',
      to,
      message,
    });

    const response = await fetch(
      "https://api.africastalking.com/version1/messaging",
      {
        method: "POST",
        headers: {
          apiKey: 'atsk_29780927e61b255eb0cec17a992b48c80f59785816c06cf41f3678e458cec237c460f336',
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body,
      }
    );

    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
