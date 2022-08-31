function downloadStatus(status) {
    if (status === "idle") {
        console.log("Download");
    }
    else if (status === "downloading") {
        console.log("Downloading...");
    }
    else if (status === "complete") {
        console.log("Your download is complete!");
    }
}
downloadStatus("complete");
