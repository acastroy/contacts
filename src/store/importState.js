/**
 * @copyright Copyright (c) 2018 Team Popcorn <teampopcornberlin@gmail.com>
 *
 * @author Team Popcorn <teampopcornberlin@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

const state = {
	importState: {
		total: 0,
		accepted: 0,
<<<<<<< HEAD
		denied: 0,
		stage: 'default',
		addressbook: ''
=======
		denied: 0
>>>>>>> 699af87659b724df00df77da2c9b66ec9013c2d6
	}
}

const mutations = {
<<<<<<< HEAD
	/**
	 * Increment the number of contacts accepted
	 *
	 * @param {Object} state
	 */
	incrementAccepted(state) {
		state.importState.accepted++
	},

	/**
	 * Increment the number of contacts denied
	 *
	 * @param {Object} state
	 */
	incrementDenied(state) {
		state.importState.denied++
	},

	/**
	 * Set the total number of contacts
	 *
	 * @param {Object} state
	 * @param {String} total the total number of contacts to import
	 */
	setTotal(state, total) {
		state.importState.total = total
	},

	/**
	 * Set the address book name
	 *
	 * @param {Object} state
	 * @param {String} addressbook the name of the address book to import into
	 */
	setAddressbook(state, addressbook) {
		state.importState.addressbook = addressbook
	},

	/**
	 * Change stage to the indicated one
	 *
	 * @param {Object} state
	 * @param {String} stage the name of the stage ('default', 'importing', 'parsing')
	 */
	changeStage(state, stage) {
		state.importState.stage = stage
	}
=======
>>>>>>> 699af87659b724df00df77da2c9b66ec9013c2d6
}

const getters = {
	getImportState: state => state.importState
}

const actions = {
<<<<<<< HEAD
	/**
	 * Increment the number of contacts accepted
	 *
	 * @param {Object} context
	 */
	incrementAccepted(context) {
		context.commit('incrementAccepted')
	},

	/**
	 * Increment the number of contacts denied
	 *
	 * @param {Object} context
	 */
	incrementDenied(context) {
		context.commit('incrementDenied')
	},

	/**
	 * Set the total number of contacts
	 *
	 * @param {Object} context
	 * @param {String} total the total number of contacts to import
	 */
	setTotal(context, total) {
		context.commit('setTotal', total)
	},

	/**
	 * Set the address book name
	 *
	 * @param {Object} context
	 * @param {String} addressbook the name of the address book to import into
	 */
	setAddressbook(context, addressbook) {
		context.commit('setAddressbook', addressbook)
	},

	/**
	 * Change stage to the indicated one
	 *
	 * @param {Object} context
	 * @param {String} stage the name of the stage ('default', 'importing', 'parsing')
	 */
	changeStage(context, stage) {
		context.commit('changeStage', stage)
	}
=======
>>>>>>> 699af87659b724df00df77da2c9b66ec9013c2d6
}

export default { state, mutations, getters, actions }
