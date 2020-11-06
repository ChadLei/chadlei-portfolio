import React from "react"

import IconLinkedIn from "./linkedin"
import IconMedium from "./medium"
import IconGitHub from "./github"
import IconTwitter from "./twitter"
import IconInstagram from "./instagram"
import IconExternal from "./external"

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "instagram":
      return <IconInstagram color={color} />
    case "twitter":
      return <IconTwitter color={color} />
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "medium":
      return <IconMedium color={color} />
    case "github":
      return <IconGitHub color={color} />
    case "external":
      return <IconExternal color={color} />
    default:
      return null
  }
}

export default Icon;
