import { getUsers } from "@/lib/prisma/users"
import Users from "./users"

export const revalidate = 0
async function getData() {
    const { users } = await getUsers()
    if (!users) {
        alert("users are not fetched")
      throw new Error('Failed to fetch data')
    }
  console.log(users.name);
  console.log(users.id);
  console.log(users.email);
  
    return users
  }
  
const UserLayout =  async ({children})=>{
    const users = await getData()
    return(
        <section className="flex">
            <aside>
                
                <Users users={users}/>
            </aside>
<main>
  {children}
  </main>
        </section>
    )
}
export default UserLayout