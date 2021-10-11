import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackBtn = (item?: any) => void

export const usePageContent = (
  newDialogCallback?: CallbackBtn,
  editDialogCallback?: CallbackBtn
) => {
  const PageModalRef = ref<InstanceType<typeof PageModal>>()
  const modalInfo = ref({})
  const handleNewDialog = () => {
    modalInfo.value = {}
    if (PageModalRef.value) {
      PageModalRef.value.dialogVisible = true
    }
    newDialogCallback && newDialogCallback()
  }

  const handleEditDialog = (item: any) => {
    modalInfo.value = { ...item }

    if (PageModalRef.value) {
      PageModalRef.value.dialogVisible = true
    }
    editDialogCallback && editDialogCallback(item)
  }
  return [modalInfo, PageModalRef, handleNewDialog, handleEditDialog]
}
