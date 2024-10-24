const galleryPreview = document.querySelector("div#gallery");

// API fetch
fetch("https://api.kyuiki.com/api/attachment/1280503314471059526?has=1").then(
  async (result) => {
    if (!result.ok) return console.log("Failed to fetch");
    const resultJSON = await result.json();

    const photos = resultJSON.posts
      .map((x) => x.attachments)
      .flat()
      .reverse();
    photos.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.proxy;
      galleryPreview.appendChild(img);
    });
  }
);
