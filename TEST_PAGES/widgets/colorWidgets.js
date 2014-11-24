define(["dojo/_base/declare",
			"dijit/_WidgetBase",
			"dijit/_TemplatedMixin",
			"dijit/_WidgetsInTemplateMixin",
			"dojo/text!./templates/colorWidgets.html",
			"dojo/on",
			"dojo/_base/lang",
            "dojo/aspect",
            "dojo/dnd/Source"

			],
		function (declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, template, on, lang, aspect, Source) {  

		    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
		        templateString: template,
		        widgetsInTemplate: true,

		        constructor: function () {
		        },

		        		    });
		});