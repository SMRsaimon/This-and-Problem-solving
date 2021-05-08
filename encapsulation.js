class User {

    #_username
    #_email
  
    get username() {
      return this.#_username
    }
    get email() {
      return this.#_email
    }
    set username(newUsername) {
      if (newUsername && newUsername.length <= 3) {
        throw new Error('username must contain more than 3 characters.')
      }
  
      this.#_username = newUsername
    }
    set email(newEmail) {
      if (newEmail && newEmail.length === 4) {
        throw new Error('email must contain more than 4 characters.')
      }
  
      this.#_email = newEmail
    }
  }
  
  const user1 = new User()
  user1.username = "fohjrdfjk";
  console.log(user1.username)