<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="container">
      <div class="Dashboard">
        <h1 class="is-size-1">Admin-Dashboard</h1>
        <h5 class="is-size-5">
          Hier stehen sehr geheime Datenbank-Informationen:
        </h5>
        <nav class="panel mt-4">
          <p class="panel-heading mt-4">Nutzer-Datenbank</p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Search" />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <p class="panel-tabs">
            <a class="is-active">Alle</a>
            <a>Normal</a>
            <a>Mitarbeiter</a>
            <a>Administrator</a>
          </p>
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <thead>
              <th>Name</th>
              <th>Rolle</th>
              <th>User-ID</th>
              <th>E-Mail</th>
              <th>Verifiziert</th>
            </thead>
            <tbody v-for="user in users" :key="user.id">
              <tr>
                <td>{{ user.name }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.uid }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.emailVerified }}</td>
              </tr>
            </tbody>
          </table>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { todosCollection, usersCollection } from "../firebase";
import { auth } from "../firebase";

export default {
  name: "Dashboard",
  data() {
    return {
      users: [],
      todos: [],
    };
  },
  firestore() {
    return {
      users: usersCollection,
      todos: todosCollection,
    };
  },
  methods: {},
};
</script>
