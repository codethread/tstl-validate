--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____index = require("utils.index")
local getIssue = ____index.getIssue
--- Creates a non nullish schema.
-- 
-- @param wrapped The wrapped schema.
-- @param error The error message.
-- @returns A non nullish schema.
function ____exports.nonNullish(wrapped, ____error)
    return {
        schema = "non_nullish",
        wrapped = wrapped,
        async = false,
        _parse = function(self, input, info)
            if input == nil or input == nil then
                return {issues = {getIssue(info, {reason = "type", validation = "non_nullish", message = ____error or "Invalid type", input = input})}}
            end
            return wrapped:_parse(input, info)
        end
    }
end
return ____exports
