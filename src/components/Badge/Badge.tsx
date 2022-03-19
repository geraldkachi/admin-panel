import "./badge.css"
import React, {  HTMLAttributes } from "react"


// const badgeStyle = {
//     "danger": "badge-danger",
//     'primary': "badge-primary"
// }

interface BadgeProps {
    type: HTMLAttributes<HTMLSpanElement>,
    content: any
}

const Badge = ({type, content}: BadgeProps) => {
  return (
    <span className={`badge badge-${type}`}>{content}</span>
  )
}

export default Badge