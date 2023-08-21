import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import customerReducer from '../features/customer/customerSlice'
import commoditeCategorieReducer from '../features/commoditeCategory/commoditeCategorySlice'
import guestReducer from '../features/guest/guestSlice'
import customerPreferenceReducer from '../features/customerPreference/customerPreferenceSlice'
import commoditeReducer from '../features/commodite/commoditeSlice'
import roomReducer from '../features/room/roomSlice'
import equipementReducer from '../features/equipementFonctionement/equipementFonctionementSlice'
import eventReducer from '../features/eventCalendar/eventCalendarSlice'
import formSatisfactionReducer from '../features/formSatisfaction/formSatisfactionSlice'
import horraireReducer from '../features/horraire/horraireSlice'
import hotelPlanReducer from '../features/hotelPlan/hotelPlanSlice'
import imageSlideReducer from '../features/imageSlide/imageSlideSlice'
import loisirReducer from '../features/loisir/loisirSlice'
import loisirCategorieReducer from '../features/loisirCategorie/loisirCategorieSlice'
import messageReducer from '../features/message/messageSlice'
import questionReducer from '../features/questionSatisfaction/questionSatisfactionSlice'
import sosReducer from '../features/sos/sosSlice'
import urgenceReducer from '../features/urgence/urgenceSlice'
import visitReducer from '../features/visit/visitSlice'
import urgenceCategorieReducer from '../features/urgenceCategorie/urgenceCategorieSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    customer: customerReducer,
    commoditeCategory: commoditeCategorieReducer,
    guest: guestReducer,
    customerPreference: customerPreferenceReducer,
    commodite: commoditeReducer,
    room: roomReducer,
    equipement: equipementReducer,
    event: eventReducer,
    formSatisfaction: formSatisfactionReducer,
    horraire: horraireReducer,
    hotelPlan: hotelPlanReducer,
    imageSlide: imageSlideReducer,
    loisir: loisirReducer,
    loisirCategorie: loisirCategorieReducer,
    message: messageReducer,
    question: questionReducer,
    sos: sosReducer,
    urgence: urgenceReducer,
    urgenceCategorie: urgenceCategorieReducer,
    visit: visitReducer,
  },
})
