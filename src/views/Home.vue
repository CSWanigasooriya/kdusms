<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Time Table</span>
            <!-- <vs-table striped>
              <template #thead>
                <vs-tr>
                  <vs-th> Monday </vs-th>
                  <vs-th> Tuesday </vs-th>
                  <vs-th> Wednesday </vs-th>
                  <vs-th> Thursday </vs-th>
                  <vs-th> Friday </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
                  <vs-td>
                    {{ tr.name }}
                  </vs-td>
                  <vs-td>
                    {{ tr.email }}
                  </vs-td>
                  <vs-td>
                    {{ tr.id }}
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table> -->
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Announcements</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Courses</span>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Attendence</span>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Messages</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.card {
  border-radius: 1em;
}
</style>