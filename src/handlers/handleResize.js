export default function reAlignProjects(width) {
  if (width < 640) {
    this.projectsCont.style = "transition: all 0.5s ease;justify-content: left"
  }
  else {
    this.projectsCont.style = "transition: all 0.5s ease"
  }
}