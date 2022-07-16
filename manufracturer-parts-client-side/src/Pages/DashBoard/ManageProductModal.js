const ManageProductModal = ({ deleteItem, deleteOrder, setDeleteOrder }) => {
  return (
    <>
      <input type="checkbox" id="deleOrder" class="modal-toggle" />
      <div class="modal bg-transparent">
        <div class="modal-box relative">
          <label
            for="deleOrder"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Are You Sure You Want To Delete Item
          </h3>

          <button
            className="btn btn-xs mt-5 bg-red-500 border-0"
            onClick={() => deleteItem(deleteOrder._id)}
          >
            Delete
          </button>
          <label for="deleOrder" class="btn btn-xs ml-3 ">
            cancel
          </label>
        </div>
      </div>
    </>
  );
};

export default ManageProductModal;
