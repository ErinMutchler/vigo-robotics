<template>
  <div class="console">
    <textarea disabled="true" style="width: 100%; height: 100%; overflow-y: scroll" id="console"></textarea>
  </div>
</template>

<script>
import {databaseService} from "@/services/FirebaseConfig";
export default {
  name: "TheConsole",
  mounted() {
    databaseService.startChangeListener((data) => {
      document.getElementById("console").value += JSON.stringify(data.console) + "\n";
    })
  }
}
</script>

<style scoped>
.console {
  height: 10rem;
  border: 2px solid black
}
</style>