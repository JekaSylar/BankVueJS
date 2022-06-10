<template>
  <div class="row modal-row">
    <div class="d-flex justify-content-center align-content-center flex-wrap">
      <div class="col-lg-4">
        <div class="requestModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button
                  type="button"
                  class="btn-close"
                  @click.prevent="$emit('close')"
                ></button>
              </div>
              <div class="modal-body">
                <p class="text-center">Вы уверенные что хотите удалять ?</p>
                <div class="d-flex justify-content-center delete-modal">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="$emit('deletePost')"
                  >
                    Да
                  </button>
                  <button
                    type="button"
                    @click.prevent="$emit('close')"
                    class="btn btn-primary"
                  >
                    Нет
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close", "deletePost"],
};
</script>

<style scoped>
.delete-modal button {
  margin-right: 10px;
  width: 100px;
}
</style>>