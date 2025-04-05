import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configuration

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function checkingImageProcessing(url: string) {
  try {
    const response = await fetch(url);
    if (response.ok) return true;
  } catch (error) {
    if (error) return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { imgUrl } = await request.json();

    // remove the other effect
    let url = imgUrl;
    if (imgUrl.includes("e_enhance")) {
      url = imgUrl.replace("/e_enhance", "");
    }

    if (imgUrl.includes("e_background_removal")) {
      url = imgUrl.replace("/e_background_removal", "");
    }

    if (imgUrl.includes("e_gen_remove")) {
      url = imgUrl.replace("/e_gen_remove", "");
    }

    if (imgUrl.includes("e_gen_restore")) {
      url = imgUrl.replace("/e_gen_restore", "");
    }

    if (imgUrl.includes("e_gen_background_replace")) {
      url = imgUrl.replace("/e_gen_background_replace", "");
    }

    console.log(url);

    const parts = url.split("/upload/");
    const enhanceUrl = `${parts[0]}/upload/e_enhance/${parts[1]}`;
    // const restoreUrl = cloudinary.image(parts[1], { effect: "gen_restore" });

    let isProcessed = false;
    const maxAttempts = 20;
    const delay = 1000;

    for (let attempts = 0; attempts < maxAttempts; attempts++) {
      isProcessed = (await checkingImageProcessing(enhanceUrl))!;

      if (isProcessed) {
        return NextResponse.json(
          { enhanceUrl, success: true },
          { status: 200 }
        );
      }

      await new Promise((resolve) => setTimeout(resolve, delay));

      if (!isProcessed) {
        // throw new Error("image processing time out");
        return NextResponse.json({ error: "enhance failed" }, { status: 500 });
      }

      return NextResponse.json({ enhanceUrl, success: true }, { status: 200 });
    }

    return NextResponse.json({ enhanceUrl, success: true }, { status: 200 });
  } catch (error) {
    console.log("Error enhance image", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to enhance image",
      },
      { status: 500 }
    );
  }
}
