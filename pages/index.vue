<script>
import {validFeeds} from '~/common/api'
export default {
  fetch({redirect}){
    console.log(validFeeds)
    redirect('/'+validFeeds[0])
  }
}
</script>>