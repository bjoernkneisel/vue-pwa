<template>
  <div class="register">
    
  </div>
</template>

<script>
import { auth } from '../firebase'
export default {
  name: 'Register',
  props: {
    displayName: null,
    error: null
  },
  methods: {
    submit() {
      auth()
      .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
}
</script>