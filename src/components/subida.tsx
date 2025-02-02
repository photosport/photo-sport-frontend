import { useState, ChangeEvent } from "react";
import HeaderSesion from "./home/headerSesion";
import Footer from "./home/footer";
import { apiBackendLocal } from "../validation/url";

function Subida() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadUrl(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch(`${apiBackendLocal}/subida`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al subir la imagen");
      }

      const data = await response.json();
      setUploadUrl(data.url);
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HeaderSesion />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Subir Imagen
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />

            {previewUrl ? (
              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">
                  Vista previa de la imagen:
                </p>
                <img
                  src={previewUrl}
                  alt="Vista previa"
                  className="max-w-full h-auto rounded"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                No se ha seleccionado ninguna imagen.
              </p>
            )}

            <button
              onClick={handleUpload}
              disabled={!selectedImage || loading}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "Subiendo..." : "Subir Imagen"}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {uploadUrl && (
              <div className="mt-4">
                <p className="text-green-600 font-medium">
                  Imagen subida exitosamente. URL temporal:
                </p>
                <a
                  href={uploadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {uploadUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Subida;
