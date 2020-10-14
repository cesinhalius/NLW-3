import Orphanage from '../model/Orphanege';
import imagesView from './Image_view'
export default {
  render(orphanage: Orphanage){
    return{
      id:orphanage.id,
      name:orphanage.name,
      latitude:orphanage.latitude,
      longitude:orphanage.longitude,
      about:orphanage.about,
      instruction:orphanage.instructions,
      opening_hours:orphanage.opening_hours,
      open_weekends:orphanage.open_weekends,
      images: imagesView.renderMany(orphanage.images)
    };
  },
  renderMany(orphanages: Orphanage[]){
    return orphanages.map(orphanage => this.render(orphanage));
  }
}