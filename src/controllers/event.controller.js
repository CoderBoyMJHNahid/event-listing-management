const uploadImage = async (req, res) => {
  try {
    const imageFile = req.file;
    if (!imageFile) {
      return res.status(400).json({
        success: false,
        message: 'No image file uploaded.',
      });
    }

    res.status(200).json({
      success: true,
      imageUrl: `${process.env.BACKEND_SITE_URL}api/uploads/${imageFile.filename}`,
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { uploadImage };
