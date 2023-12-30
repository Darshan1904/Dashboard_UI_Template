import { useState, ChangeEvent } from "react";
import AnimationWrapper from "../common/animation";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

interface Graph {
  title: string;
  dateCreated: string;
  previewThumbnail: string;
  papersUploaded: string[];
}

const PublishForm: React.FC = () => {
  const [newGraph, setNewGraph] = useState<Graph>({
    title: "",
    dateCreated: "",
    previewThumbnail: "",
    papersUploaded: [],
  });
  const papersLimit = 10;

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setNewGraph((prevGraph) => ({ ...prevGraph, title }));
  };

  const handleDesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const dateCreated = e.target.value;
    setNewGraph((prevGraph) => ({ ...prevGraph, dateCreated }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const previewThumbnail = reader.result as string;
        toast.success("Image uploaded successfully");
        setNewGraph((prevGraph) => ({ ...prevGraph, previewThumbnail }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  const deletePaper = (paper: string) => {
    const papersUploaded = newGraph.papersUploaded.filter((t) => t !== paper);
    setNewGraph({ ...newGraph, papersUploaded });
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const uploadedFileNames = Array.from(files).map((file) => file.name);
      setNewGraph((prevGraph) => ({
        ...prevGraph,
        papersUploaded: [...prevGraph.papersUploaded, ...uploadedFileNames],
      }));
      toast.success("File(s) uploaded successfully");
    }
  };

  return (
    <AnimationWrapper keyValue={100}>
      <section className="w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4 bg-gray-900 text-white">
        <Toaster />
        <Link to="/" className="w-12 h-12 absolute right-[5vw] z-10 top-[5%] lg:top-[10%]">
          <i className="fi fi-br-cross"></i>
        </Link>

        <div className="max-w-[550px] center items-start justify-start">
          <p className="text-dark-grey mb-1 w-full">Preview</p>
          <h1 className="text-4xl font-md mt-2 leading-tight line-clamp-2 w-full">
            {newGraph.title}
          </h1>
          <p className="font-gelasio line-clamp-2 text-xl leading-7 mt-4 w-full">
            {newGraph.dateCreated}
          </p>
          {newGraph.previewThumbnail && <img src={newGraph.previewThumbnail} alt="" />}
        </div>

        <div className="border-grey lg:border-1 lg:pl-8 bg-gray-800 p-4 rounded-md">
          <p className="text-light-gray mb-2 mt-9">Graph Title</p>
          <input
            type="text"
            placeholder="Graph Title"
            className="input-box pl-4 bg-gray-700 text-white"
            value={newGraph.title}
            onChange={handleTitleChange}
          />

          <p className="text-light-gray mb-2 mt-9">Description</p>
          <textarea
            placeholder="Add a description"
            className="input-box pl-4 h-40 resize-none leading-7 bg-gray-700 text-white"
            value={newGraph.dateCreated}
            onChange={handleDesChange}
            onKeyDown={handleKeyDown}
          />

          <p className="text-light-gray mb-2 mt-9">
            Papers Uploaded - (Help in Searching and Ranking your Graph)
          </p>
          <div className="relative input-box pl-2 py-2 pb-4">
            <div className="flex gap-2">
                <label htmlFor="fileUpload" className="block mb-2 py-2 text-light-gray">
                Upload Papers
                </label>
                <input
                type="file"
                id="fileUpload"
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
                onChange={handleFileUpload}
                multiple
                />
                <label
                htmlFor="fileUpload"
                className="cursor-pointer w-max bg-gray-700 py-2 px-4 rounded-md text-center hover:bg-gray-600"
                >
                Choose File
                </label>
            </div>
            {newGraph.papersUploaded.map((paper, index) => (
              <div
                key={index}
                className="relative p-2 mt-2 mr-2 px-5 bg-gray-700 hover:bg-opacity-50 pr-8 rounded-full inline-block"
              >
                <p className="outline-none mr-2">{paper}</p>
                <button
                  className="mt-[2px] rounded-full absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => deletePaper(paper)}
                >
                  <i className="fi fi-br-cross text-sm pointer-events-none"></i>
                </button>
              </div>
            ))}
          </div>
          <p className="mt-1 text-light-gray text-sm text-right">
            {papersLimit - newGraph.papersUploaded.length} papers left
          </p>

          {/* Image Upload */}
          <div className="mt-4 flex gap-4 mb-3">
            <label htmlFor="imageUpload" className="block mb-2 py-2 text-light-gray">
              Upload Thumbnail
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
              multiple
            />
            <label
              htmlFor="imageUpload"
              className="cursor-pointer w-max bg-gray-700 py-2 px-4 rounded-md text-center hover:bg-gray-600"
            >
              Choose File
            </label>
          </div>

          <button className="btn-dark px-8 mt-4">Publish</button>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default PublishForm;