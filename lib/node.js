/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * lib/node.js ~ 2014/03/07 20:25:20
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/

/**
 * 命令节点类
 *
 * @constructor
 * @param {Object} mod 模块对象.
 * @param {string} pkg 模块的名称.
 */
function CommandNode( mod, pkg ) {
    this.children = {};
    this.name = pkg;
    this.module = mod || null;
}

/**
 * 获取子节点
 *
 * @inner
 * @param {string} name 子节点名称
 * @return {CommandNode}
 */
CommandNode.prototype.getChild = function ( name ) {
    return this.children[ name ] || null;
};

/**
 * 添加子节点
 *
 * @inner
 * @param {Object} child 子节点模块
 */
CommandNode.prototype.addChild = function ( child ) {
    var mod = child.module;
    var cli = mod.cli;
    if ( cli ) {
        this.children[ cli.command ] = child;

        if ( cli.alias ) {
            this.children[ cli.alias ] = child;
        }
    }
};

/**
 * 获取子节点的模块
 *
 * @inner
 * @param {string} name 子节点名称
 * @return {Object}
 */
CommandNode.prototype.getChildModule = function ( name ) {
    var node = this.getChild( name );
    if ( node ) {
        return node.module;
    }

    return null;
};


/**
 * @ignore
 */
exports.CommandNode = CommandNode;





















/* vim: set ts=4 sw=4 sts=4 tw=100: */