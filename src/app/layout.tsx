import { ErrorWrapper } from "./error-wraper"
export default function rootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{backgroundColor:"lightblue" , padding:"2rem" }}>
                  <p style={{fontSize:"40px" }}>Header</p>  </header>
                    <ErrorWrapper>
                       {children}
                    </ErrorWrapper>
                   

                    <footer
                      style = {{fontSize:"40px" , backgroundColor:"ghostwhite" , padding:"1rem"}}>
 <p>Footer</p>
                    </footer>
                    </body>

    </html>
  )
}
