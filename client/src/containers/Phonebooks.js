import { connect } from 'react-redux'
import { deletePhonebooks, resendPhonebooks } from '../actions'
import ItemSiswa from '../components/ItemSiswa'

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeData: () => dispatch(deletePhonebooks(ownProps.id)),
    resendData: () => dispatch(resendPhonebooks(ownProps.id, ownProps.name, ownProps.phone))
})

export default connect(
    null,
    mapDispatchToProps
)(ItemSiswa)