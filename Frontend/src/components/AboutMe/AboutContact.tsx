type Contact = {
   contact: string
}

export const AboutContactInfo = ({ contact }: Contact) => {
   return(
      <p>{ contact }</p>
   )
}