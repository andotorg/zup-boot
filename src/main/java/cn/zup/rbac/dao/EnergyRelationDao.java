package cn.zup.rbac.dao;
import java.util.List;

import org.apache.ibatis.annotations.Result;
import org.jeecgframework.minidao.annotation.Arguments;
import org.jeecgframework.minidao.annotation.MiniDao;
import org.jeecgframework.minidao.annotation.ResultType;
import org.jeecgframework.minidao.hibernate.MiniDaoSupportHiber;
import org.jeecgframework.minidao.pojo.MiniDaoPage;

import cn.zup.rbac.entity.EnergyRegion;
import cn.zup.rbac.entity.EnergyRelation;

@MiniDao
public interface EnergyRelationDao extends MiniDaoSupportHiber<EnergyRelation>{
	@Arguments({"energyRelation"})
	@ResultType(EnergyRelation.class)
	EnergyRelation getEnergyRelationInfo(EnergyRelation energyRelation);
	@Arguments({"energyRelation"})
	@ResultType(EnergyRelation.class)
	List<EnergyRelation> getEnergyRelationList(EnergyRelation energyRelation);
	
}
