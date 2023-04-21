type Contact = {
   contact: string
}

export const AboutContactInfo = ({ contact }: Contact) => {
   return(
      <div className="aboutContact flex text-color border-gradient-blue">
         <p className="bold italic degrade-blue p-1">{ contact }</p> 
      </div>
   )
}